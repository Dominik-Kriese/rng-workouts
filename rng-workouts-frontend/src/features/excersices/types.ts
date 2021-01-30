export const muscleGroups = <const>[
    'Chest',
    'Shoulder',
    'Biceps',
    'Triceps',
    'Upper Back',
    'Latissimus',
    'Quadriceps',
    'Abs',
    'Hamstrings'
]

export type MuscleGroup = typeof muscleGroups[number]

export type Exercise = {
    name: string;
    muscleGroups: MuscleGroup[];
}
