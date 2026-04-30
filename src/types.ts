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
