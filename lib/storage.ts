import { Profile } from '@/database/entity';
import { isClient } from '@/lib/utils';

export async function saveSession(data: any) {
  if (isClient()) {
    window.sessionStorage.setItem(
      'user_session',
      JSON.stringify(Profile(data))
    );
  }
}

export function getSession() {
  if (isClient()) {
    return JSON.parse(window.sessionStorage.getItem('user_session')!);
  }

  return {};
}
