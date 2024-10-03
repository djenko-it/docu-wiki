import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.mainTitle)}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Commencez ici !
          </Link>
        </div>
      </div>
    </header>
  );
}

function References() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nos références</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/img/references/client1.png" alt="Client 1" />
            <h3>Client 1</h3>
          </div>
          <div className={styles.card}>
            <img src="/img/references/client2.png" alt="Client 2" />
            <h3>Client 2</h3>
          </div>
          <div className={styles.card}>
            <img src="/img/references/client3.png" alt="Client 3" />
            <h3>Client 3</h3>
          </div>
          <div className={styles.card}>
            <img src="/img/references/client3.png" alt="Client 3" />
            <h3>Client 3</h3>
          </div>
          <div className={styles.card}>
            <img src="/img/references/client3.png" alt="Client 3" />
            <h3>Client 3</h3>
          </div>
          <div className={styles.card}>
            <img src="/img/references/client3.png" alt="Client 3" />
            <h3>Client 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenue sur ${siteConfig.title}`}
      description="Description du site web">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <HomepageFeatures />
        
        {/* Section Pourquoi Nous Choisir */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Facile à utiliser</h3>
                <p>Docusaurus est conçu pour être facilement configuré et utilisé pour tout type de projet.</p>
              </div>
              <div className={styles.card}>
                <h3>Rapide et performant</h3>
                <p>Un site statique rapide et optimisé pour la performance.</p>
              </div>
              <div className={styles.card}>
                <h3>Extensible</h3>
                <p>Avec une architecture modulaire, vous pouvez personnaliser Docusaurus selon vos besoins.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Nos Références */}
        <References />
      </main>
    </Layout>
  );
}
