/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Member = 'SIMO' | 'MARCO' | 'DAVE' | 'PIETRO' | 'FILO';

export interface Choice {
  text: string;
  member: Member;
}

export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

export interface PollOption {
  id: string;
  name: string;
  type: 'dirigente' | 'giocatore';
  role?: string;
  info?: string;
}

export interface Poll {
  id: string;
  title: string;
  description: string;
  options: PollOption[];
}

export interface Vote {
  id?: string;
  pollId: string;
  member: Member;
  selectedOptions: string[];
  timestamp: string;
}
