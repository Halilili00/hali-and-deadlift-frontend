import React from 'react';
import type { MuscleRole } from '../../../store/api/hali-deadlift-api';
import { MuscleRole as MuscleRoleConstant } from '../../../constants/muscle-role';

type Props = {
  name: string | undefined;
  onClick?: () => void;
  isSelected?: boolean;
  muscleRole?: MuscleRole;
  className?: string;
};

const MuscleGroupBadge: React.FC<Props> = ({
  name,
  onClick,
  isSelected = false,
  muscleRole,
  className = 'rounded-full',
}) => {
  const bgColor = () => {
    switch (muscleRole) {
      case MuscleRoleConstant.Primary:
        return 'bg-red-200 text-black-800';
      case MuscleRoleConstant.Secondary:
        return 'bg-yellow-200 text-black-800';
      case MuscleRoleConstant.Tertiary:
        return 'bg-yellow-200 text-black-800';
      case MuscleRoleConstant.Stabilizer:
        return 'bg-purple-200 text-black-800';
      default:
        return isSelected ? 'bg-black text-white' : 'bg-gray-200 text-gray-800 hover:bg-slate-300';
    }
  };

  return (
    <button className={`px-3 py-1.5 text-nowrap ${bgColor()} ${className}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default MuscleGroupBadge;
