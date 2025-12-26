
export enum ConformanceLevel {
  HUMAN = 'HUMAN',
  HUMAN_LED = 'HUMAN_LED',
  DISCLOSED = 'DISCLOSED',
  NON_CONFORMANT = 'NON_CONFORMANT'
}

export interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    nextId?: string;
    result?: ConformanceLevel;
  }[];
}

export interface StandardSection {
  id: string;
  title: string;
  content: string | string[];
}
