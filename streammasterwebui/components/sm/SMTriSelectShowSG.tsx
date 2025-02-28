import SMButton from '@components/sm/SMButton';
import { useSelectedStreamGroup } from '@lib/redux/hooks/selectedStreamGroup';
import { useShowHidden } from '@lib/redux/hooks/showHidden';
import { useCallback, useEffect, useMemo } from 'react';

interface SMTriSelectShowSGProperties {
  readonly dataKey: string;
  onChange?: (value: boolean | null) => void;
}

export const SMTriSelectShowSG = ({ dataKey, onChange }: SMTriSelectShowSGProperties) => {
  const { showHidden, setShowHidden } = useShowHidden(dataKey);
  const { selectedStreamGroup } = useSelectedStreamGroup('StreamGroup');

  const isDisabled = useMemo(() => {
    return selectedStreamGroup !== undefined && selectedStreamGroup.Id === 1;
  }, [selectedStreamGroup]);

  useEffect(() => {
    if (isDisabled && showHidden !== null) {
      setShowHidden(null);
      onChange && onChange(null);
    }
  }, [isDisabled, onChange, setShowHidden, showHidden]);

  const getToolTip = useMemo((): string => {
    if (showHidden === null) {
      return 'All';
    }

    if (showHidden === true) {
      return `In ${selectedStreamGroup?.Name ?? 'SG'}`;
    }

    return `Not In ${selectedStreamGroup?.Name ?? 'SG'}`;
  }, [selectedStreamGroup?.Name, showHidden]);

  const moveNext = useCallback(() => {
    if (isDisabled) {
      return;
    }
    if (showHidden === null) {
      setShowHidden(true);
      onChange && onChange(true);
      return;
    }

    if (showHidden === true) {
      setShowHidden(false);
      onChange && onChange(false);
      return;
    }

    setShowHidden(null);
    onChange && onChange(null);
  }, [isDisabled, onChange, setShowHidden, showHidden]);

  const getIcon = useMemo(() => {
    if (showHidden === null) {
      return 'pi-eye';
    }

    if (showHidden === true) {
      return 'pi-eye';
    }

    return 'pi-eye-slash';
  }, [showHidden]);

  const getColor = useMemo(() => {
    if (showHidden === null) {
      return 'icon-yellow';
    }

    if (showHidden === true) {
      return 'icon-green';
    }

    return 'icon-red';
  }, [showHidden]);

  return (
    <SMButton
      buttonDisabled={isDisabled}
      icon={getIcon}
      iconFilled={false}
      buttonClassName={getColor}
      onClick={() => moveNext()}
      rounded
      tooltip={getToolTip}
    />
  );
};
