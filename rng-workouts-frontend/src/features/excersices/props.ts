import {Exercise, MuscleGroup} from './types';

export type MuscleGroupsProps = {
    muscleGroups: MuscleGroup[];
}

export type ExerciseNameProps = {
    name: string;
}

export type ExercisesProps = {
    exercises: Exercise[];
}

export type ExerciseProps = {
    exercise: Exercise;
}

export type ExpandedHeadlineProps = {
    title: string;
    expanded: boolean;
    callback: () => void;
}
