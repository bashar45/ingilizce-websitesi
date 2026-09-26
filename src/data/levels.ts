export type LevelGroup = "core" | "exam";

export interface Level {
  name: string;
  slug: string;
  group: LevelGroup;
  audience: string;
  sampleWord: string;
  recommended?: boolean;
}

export const LEVELS: Level[] = [
  {
    name: "Elementary",
    slug: "elementary",
    group: "core",
    audience: "Temel kelimeleri sağlam kurmak isteyenler için.",
    sampleWord: "usually",
  },
  {
    name: "Pre-Intermediate",
    slug: "pre-intermediate",
    group: "core",
    audience: "Günlük İngilizce cümlelerini güçlendirmek isteyenler için.",
    sampleWord: "improve",
  },
  {
    name: "Intermediate",
    slug: "intermediate",
    group: "core",
    audience: "Bildiklerini daha doğal cümlelere çevirmek isteyenler için.",
    sampleWord: "avoid",
    recommended: true,
  },
  {
    name: "Upper-Intermediate",
    slug: "upper-intermediate",
    group: "core",
    audience: "Daha güçlü ifade ve kelime çeşitliliği isteyenler için.",
    sampleWord: "overwhelmed",
  },
  {
    name: "YDS",
    slug: "yds",
    group: "exam",
    audience: "Akademik ve sınav odaklı kelime pratiği isteyenler için.",
    sampleWord: "inevitable",
  },
  {
    name: "IELTS",
    slug: "ielts",
    group: "exam",
    audience: "Writing ve speaking kelime gücünü artırmak isteyenler için.",
    sampleWord: "perspective",
  },
  {
    name: "TOEFL",
    slug: "toefl",
    group: "exam",
    audience: "Akademik İngilizce kelime pratiği isteyenler için.",
    sampleWord: "evidence",
  },
];
