export interface UserInterface {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  about: string;
  photo: string;
  pius: PiuInterface[];
  likes: PiuLikeInterface[];
  following: UserInterface[];
  followers: UserInterface[];
  favorites: PiuInterface[];
}

export interface PiuInterface {
  id?: string;
  user: UserInterface;
  likes: PiuLikeInterface[];
  text: string;
  created_at: Date;
  updated_at?: Date;
}

export interface PiuLikeInterface {
  id: string;
  user: UserInterface;
  piu: PiuInterface;
}
