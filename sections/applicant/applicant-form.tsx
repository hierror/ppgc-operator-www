'use client';

import { FileUploader } from '@/components/file-uploader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_TYPES = {
  'image/*': [],
  'application/pdf': []
};

const formSchema = z.object({
  code: z.string(),
  name: z.string(),
  surname: z.string(),
  selection: z.any(),
  evaluation_document: z.any(),
  resume_document: z.string(),
  memorial_document: z.any(),
  school_record_document: z.any()
});

export default function ApplicantForm({ selections }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: '',
      name: '',
      surname: '',
      selection: undefined,
      evaluation_document: undefined,
      resume_document: '',
      memorial_document: undefined,
      school_record_document: undefined
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="text-left text-2xl font-bold">
          Cadastrar novo inscrito
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Insira o nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input placeholder="Insira o sobrenome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de inscrição</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira o número de inscrição"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="selection"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Processo seletivo</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o processo seletivo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selections?.map((selection: any) => {
                          return (
                            <SelectItem value={selection.uuid}>
                              {selection.description}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="resume_document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currículo Lattes</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira a URL de seu currículo Lattes"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="memorial_document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Memorial Descritivo e Acadêmico</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira a URL para o seu vídeo memorial"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="evaluation_document"
              render={({ field }) => (
                <div className="space-y-2">
                  <FormItem className="w-full">
                    <FormLabel>Ficha de avaliação</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={field.value}
                        onValueChange={field.onChange}
                        maxFiles={1}
                        maxSize={MAX_FILE_SIZE}
                        accept={ACCEPTED_TYPES}
                        // disabled={loading}
                        // progresses={progresses}
                        // pass the onUpload function here for direct upload
                        // onUpload={uploadFiles}
                        // disabled={isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="school_record_document"
              render={({ field }) => (
                <div className="space-y-2">
                  <FormItem className="w-full">
                    <FormLabel>Histórico Escolar</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={field.value}
                        onValueChange={field.onChange}
                        maxFiles={1}
                        maxSize={MAX_FILE_SIZE}
                        accept={ACCEPTED_TYPES}
                        // disabled={loading}
                        // progresses={progresses}
                        // pass the onUpload function here for direct upload
                        // onUpload={uploadFiles}
                        // disabled={isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <Button type="submit">Adicionar novo inscrito</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
