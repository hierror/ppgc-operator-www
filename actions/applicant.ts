'use server';

import { createRootClient } from '@/lib/supabase/server';

export const create = async (formData: any) => {
  const root = await createRootClient();

  const evaluationDocument = formData?.evaluation_document[0];
  const schoolRecordDocument = formData?.school_record_document[0];
  const resumeDocument = formData?.resume_document;
  const memorialDocument = formData?.memorial_document;

  let { data } = await root
    .from('Selection')
    .select('id')
    .eq('uuid', formData.selection);

  const selectionId = data![0]?.id;

  let { data: applicantData } = await root
    .from('Applicant')
    .insert({
      code: formData.code,
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      first_score: 0,
      second_score: 0,
      final_score: 0,
      selection_id: selectionId
    })
    .select('id, uuid');

  const { id, uuid } = applicantData![0];

  // Cria os documentos no storage

  const schoolRecordType = schoolRecordDocument.name.split('.').pop();
  let { data: schoolRecordData } = await root.storage
    .from('documents')
    .upload(`${uuid}/school_record.${schoolRecordType}`, schoolRecordDocument, {
      cacheControl: '3600',
      upsert: false
    });

  const evaluationType = evaluationDocument.name.split('.').pop();
  let { data: evaluationData } = await root.storage
    .from('documents')
    .upload(`${uuid}/evaluation.${evaluationType}`, evaluationDocument, {
      cacheControl: '3600',
      upsert: false
    });

  const { data: schoolRecordInsert } = await root
    .from('Document')
    .insert({
      type: schoolRecordType,
      path: schoolRecordData?.path
    })
    .select('id');
  const schoolRecordId = schoolRecordInsert![0]?.id;

  const { data: evaluationInsert, error: errorInsert } = await root
    .from('Document')
    .insert({
      type: evaluationType,
      path: evaluationData?.path
    })
    .select('id');
  const evaluationId = evaluationInsert![0]?.id;

  const { data: resumeInsert } = await root
    .from('Document')
    .insert({
      type: 'url',
      url: resumeDocument
    })
    .select('id');
  const resumeId = resumeInsert![0]?.id;

  const { data: memorialInsert } = await root
    .from('Document')
    .insert({
      type: 'url',
      url: memorialDocument
    })
    .select('id');
  const memorialId = memorialInsert![0]?.id;

  let { error } = await root
    .from('Applicant')
    .update({
      evaluation_document_id: evaluationId,
      school_record_document_id: schoolRecordId,
      resume_document_id: resumeId,
      memorial_document_id: memorialId
    })
    .eq('id', id);

  return { data: { selectionId }, error };
};
