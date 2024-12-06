import { Roles } from '@/constants/enums';
import { formatter } from '@/lib/date';

export const Profile = (profile: any) => {
  return {
    uuid: profile.uuid,
    name: profile.name,
    surname: profile.surname,
    email: profile.email,
    full_name: `${profile.name} ${profile.surname}`,
    role: Roles[profile.Role.id]
  };
};

export const Profiles = (profiles: any) => {
  return profiles.map((profile: any) => ({
    uuid: profile.uuid,
    name: profile.name,
    surname: profile.surname,
    email: profile.email,
    full_name: `${profile.name} ${profile.surname}`,
    role: Roles[profile.Role.id]
  }));
};

export const Applicant = (applicant: any) => {
  return {
    uuid: applicant.uuid,
    code: applicant.code,
    name: applicant.name,
    surname: applicant.surname,
    full_name: `${applicant.name} ${applicant.surname}`,
    status: applicant.status,
    first_score: applicant.first_score,
    second_score: applicant.second_score,
    final_score: applicant.final_score,
    evaluation_document: applicant.evaluation_document,
    resume_document: applicant.resume_document,
    memorial_document: applicant.memorial_document,
    school_record_document: applicant.school_record_document
  };
};

export const Selection = (selection: any) => {
  return {
    uuid: selection?.uuid,
    description: selection?.description,
    year: selection?.year,
    start_date:
      selection?.start_date &&
      formatter.format(new Date(selection?.start_date)),
    end_date:
      selection?.end_date && formatter.format(new Date(selection?.end_date)),
    applicants: selection?.Applicant.map((applicant: any) =>
      Applicant(applicant)
    )
  };
};

export const Selections = (selections: any[]) => {
  return selections.map((selection) => {
    const [applicants] = selection?.Applicant ?? [];

    return {
      uuid: selection?.uuid,
      description: selection?.description,
      year: selection?.year,
      start_date:
        selection?.start_date &&
        formatter.format(new Date(selection?.start_date)),
      end_date:
        selection?.end_date && formatter.format(new Date(selection?.end_date)),
      applicants: applicants?.count || 0
    };
  });
};
