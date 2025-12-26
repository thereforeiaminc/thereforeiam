
import { Question, ConformanceLevel } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: "Did you use any generative AI systems to produce the final expressive content (images, writing, audio, etc.)?",
    options: [
      { label: "No, none at all.", nextId: "q2" },
      { label: "Yes, for minor parts.", nextId: "q3" },
      { label: "Yes, it was a major part of the creation.", nextId: "q4" }
    ]
  },
  {
    id: 'q2',
    text: "Were all expressive elements directly authored, captured, or performed by a human?",
    options: [
      { label: "Yes, completely.", result: ConformanceLevel.HUMAN },
      { label: "No, some parts were generated.", result: ConformanceLevel.NON_CONFORMANT }
    ]
  },
  {
    id: 'q3',
    text: "Did you use AI solely for analysis or enhancement (e.g., noise reduction, upscaling, spell-check)?",
    options: [
      { label: "Yes, human authorship remains primary.", result: ConformanceLevel.HUMAN_LED },
      { label: "No, AI actually generated new content.", nextId: "q4" }
    ]
  },
  {
    id: 'q4',
    text: "Are you willing to fully disclose the use of generative AI in this work?",
    options: [
      { label: "Yes, I will disclose it.", result: ConformanceLevel.DISCLOSED },
      { label: "No, I'd rather not say.", result: ConformanceLevel.NON_CONFORMANT }
    ]
  }
];

export const STANDARD_CONTENT = {
  version: "1.0",
  effectiveDate: "2025-12-25",
  sections: [
    {
      id: "scope",
      title: "1. Scope",
      content: "This standard specifies requirements for certifying that a creative work is of human creative origin. It applies to photography, film, audio, written works, and digital media. This standard certifies origin of authorship, not quality, legality, or ownership."
    },
    {
      id: "principle",
      title: "2. Normative Principle",
      content: "A work conforms to this standard when the primary creative decisions and final expressive content are determined by a human author. Tools may assist execution, but automation must not determine expressive substance."
    },
    {
      id: "levels",
      title: "3. Conformance Levels",
      content: [
        "HUMAN: No generative AI used for expressive content. All elements directly human-authored.",
        "HUMAN-LED: Human authorship primary. AI used only for analysis or enhancement (noise reduction, upscaling, etc.).",
        "DISCLOSED: Generative AI used, but fully disclosed. Human direction remains present."
      ]
    }
  ]
};
