// Podstawowe typy pomocnicze
type LocalizedString = {
  pl: string;
  en: string;
  de: string;
  fr: string;
  es: string;
};

type IntensityLevel = {
  name: string;
  description: string;
  physical_signs: string[];
};

type IntensityLevels = {
  low: IntensityLevel;
  medium: IntensityLevel;
  high: IntensityLevel;
};

// Typy dla manifestacji fizycznych
type FacialFeatures = {
  eyes: string[];
  mouth: string[];
  cheeks: string[];
  general: string[];
};

type BodyFeatures = {
  posture: string[];
  movement: string[];
  gestures: string[];
};

type VoiceFeatures = {
  tone: string[];
  pitch: string[];
  tempo: string[];
  volume: string[];
};

type PhysiologicalFeatures = {
  breathing: string[];
  muscle_tension: string[];
  heart_rate: string[];
};

type PhysicalManifestations = {
  face: FacialFeatures;
  body: BodyFeatures;
  voice: VoiceFeatures;
  physiological: PhysiologicalFeatures;
};

// Typy dla manifestacji psychologicznych
type CognitiveFeatures = {
  thought_patterns: string[];
  attention: string[];
  perception: string[];
};

type EmotionalFeatures = {
  core_feelings: string[];
  associated_emotions: string[];
};

type BehavioralFeatures = {
  social: string[];
  motivation: string[];
  energy_level: string[];
};

type MemoryFeatures = {
  recall: string[];
  formation: string[];
};

type PsychologicalManifestations = {
  cognitive: CognitiveFeatures;
  emotional: EmotionalFeatures;
  behavioral: BehavioralFeatures;
  memory: MemoryFeatures;
};

// Typy dla aspektów neurobiologicznych
type BrainRegion = {
  name: string;
  function: string;
  activity: string;
};

type HormonalChange = {
  hormone: string;
  effect: string;
  level: string;
};

type NeurobiologicalAspects = {
  brain_regions: BrainRegion[];
  hormonal_changes: HormonalChange[];
};

// Typy dla charakterystyki czasowej
type TemporalPattern = {
  gradual: string;
  sudden: string;
};

type Duration = {
  typical: string;
  factors: string[];
};

type DecayPattern = {
  natural: string;
  influenced_by: string[];
};

type TemporalCharacteristics = {
  onset_speed: TemporalPattern;
  duration: Duration;
  decay_pattern: DecayPattern;
};

// Typy dla wyzwalaczy i mechanizmów obronnych
type Triggers = {
  external: string[];
  internal: string[];
};

type DefenseMechanisms = {
  common_defenses: string[];
  coping_strategies: {
    adaptacyjne: string[];
    nieadaptacyjne: string[];
  };
};

// Typy dla aspektów rozwojowych
type DevelopmentalAspects = {
  age_manifestation: {
    childhood: string[];
    adolescence: string[];
    adulthood: string[];
  };
  developmental_milestones: string[];
};

// Typy dla wpływu na widownię
type AudienceImpact = {
  emotional_contagion: {
    mechanisms: string[];
    effects: string[];
  };
  catharsis_potential: {
    individual: string[];
    collective: string[];
  };
};

// Typy dla reprezentacji historycznych
type HistoricalRepresentations = {
  theatrical_traditions: {
    ancient: string[];
    classical: string[];
    modern: string[];
  };
};

// Główny typ dla emocji
type Emotion = {
  id: string;
  name: LocalizedString;
  intensity_levels: IntensityLevels;
  physical_manifestations: PhysicalManifestations;
  psychological_manifestations: PsychologicalManifestations;
  neurobiological_aspects: NeurobiologicalAspects;
  temporal_characteristics: TemporalCharacteristics;
  triggers: Triggers;
  defense_mechanisms: DefenseMechanisms;
  developmental_aspects: DevelopmentalAspects;
  audience_impact: AudienceImpact;
  historical_representations: HistoricalRepresentations;
};

// Typ dla całej bazy danych emocji
type EmotionsDatabase = {
  emotions: {
    [key: string]: Emotion;
  };
};

// Eksport wszystkich typów
export type {
  LocalizedString,
  IntensityLevel,
  IntensityLevels,
  PhysicalManifestations,
  PsychologicalManifestations,
  NeurobiologicalAspects,
  TemporalCharacteristics,
  Triggers,
  DefenseMechanisms,
  DevelopmentalAspects,
  AudienceImpact,
  HistoricalRepresentations,
  Emotion,
  EmotionsDatabase,
  FacialFeatures,
  BodyFeatures,
  VoiceFeatures,
  PhysiologicalFeatures,
  CognitiveFeatures,
  EmotionalFeatures,
  BehavioralFeatures,
  MemoryFeatures,
  BrainRegion,
  HormonalChange,
  TemporalPattern,
  Duration,
  DecayPattern
};
