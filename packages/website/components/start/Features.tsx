import React from 'react';
import styles from './features.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import MoreLink from '../MoreLink';
import { Trans, useTranslation } from 'next-i18next';

export default function Features() {
  const { t } = useTranslation('website');
  return (
    <>
      <div className={styles.features}>
        <div className={styles.professional}>
          <h3>{t('ANABOX smart für die professionelle Pflege ‍🔬')}</h3>
          <p>
            {t(`Einfache Gesundheitstechnologie, die Ihnen hilft Ihre Patienten zu
            verwalten und deren Adhärenz zu verbessern. Für ambulante
            Pflegedienste und die stationäre Pflege.`)}
          </p>

          <MoreLink href="/posts/professional" className={styles.more}>
            {t('Mehr lesen')}
          </MoreLink>
        </div>
        <div className={styles.support}>
          <h3>{t('Support ⛄️')}</h3>
          <p>
            {t(`Hier finden Sie mehr Informationen und Unterstützung bei der
            Einrichtung und Benutzung der`)}{' '}
          </p>

          <MoreLink href="/posts" className={styles.more}>
            {t('Mehr lesen')}
          </MoreLink>
        </div>
        <div className={styles.aboutUs}>
          <h3>{t('Über uns 🔨')}</h3>
          <p>
            <Trans i18nKey="website:start-features-about">
              Die&nbsp;
              <a href="https://www.anabox.de/" target="_blank" rel="noreferrer">
                Anmed GmbH
              </a>
              &nbsp;ist Marktführer in Medikamentenspendern. Gemeinsam mit dem
              Startup&nbsp;
              <a
                href="https://www.wirewire.de/"
                target="_blank"
                rel="noreferrer">
                wirewire GmbH
              </a>
              &nbsp;haben wir den smarten Medikamentenspender entwickelt.
            </Trans>
          </p>

          <MoreLink href="/posts/about-us" className={styles.more}>
            {t('Mehr lesen')}
          </MoreLink>
        </div>
      </div>
      <a
        href="https://www.anabox.de/"
        target="_blank"
        rel="noreferrer"
        className={styles.analogLink}>
        {t('Zu unseren analogen Produkten')}
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </>
  );
}
