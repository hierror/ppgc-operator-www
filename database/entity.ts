import { Roles } from '@/constants/enums';
import { formatter } from '@/lib/date';

export const Profile = (profile: any) => {
  console.log(profile);

  return {
    uuid: profile.uuid,
    name: profile.name,
    surname: profile.surname,
    email: profile.email,
    full_name: `${profile.name} ${profile.surname}`,
    role: Roles[profile.Role.id]
  };
};

export const Selections = (selections: any[]) => {
  return selections.map((selection) => {
    const [applicants] = selection.Applicant;

    return {
      uuid: selection.uuid,
      description: selection.description,
      year: selection.year,
      start_date: formatter.format(new Date(selection.start_date)),
      end_date: formatter.format(new Date(selection.end_date)),
      applicants: applicants.count
    };
  });
};
