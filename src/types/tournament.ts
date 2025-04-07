export type MatchSubject = {
  id?: string;
  name: string;
  description: string;
  tournament_id: string;
  session_id: string;
  duration: number;
};

export type TournamentSession = {
  id: string; // UUID
  title: string;
  description: string;
  tournament_id: string; // UUID
  start_date: string; // ISO string format
  end_date: string; // ISO string format
  location: string;
  cover_image_url: string;
  required_points: number;
};
