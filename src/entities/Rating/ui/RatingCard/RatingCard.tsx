import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  rate?: number;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    rate = 0,
    onAccept,
    onCancel,
  } = props;
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, starsCount, onAccept]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        data-testid="RatingCard.Input"
        placeholder={t('Ваш отзыв')}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  );

  return (
    <Card
      data-testid="RatingCard"
      max
      className={classNames('', {}, [className])}
    >
      <VStack align="center" gap="8">
        <Text title={starsCount ? t('Спасибо за оценку!') : title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                data-testid="RatingCard.Close"
                theme={ButtonTheme.OUTLINE_RED}
                onClick={cancelHandler}
              >
                {t('Закрыть')}
              </Button>

              <Button onClick={acceptHandler} data-testid="RatingCard.Send">
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          {modalContent}
          <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
            {t('Отправить')}
          </Button>
        </Drawer>
      </MobileView>
    </Card>
  );
});
