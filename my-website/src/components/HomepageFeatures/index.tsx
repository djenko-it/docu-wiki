import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Support',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nous offrons un support dédié pour vous aider à résoudre les problèmes que vous rencontrez. Notre équipe est disponible pour répondre à vos questions et vous guider à travers les étapes nécessaires.
      </>
    ),
  },
  {
    title: 'Procédures simplifiées',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Suivez des procédures claires et bien documentées pour configurer et utiliser notre plateforme. Que ce soit pour l’installation ou la maintenance, nous avons ce qu’il vous faut.
      </>
    ),
  },
  {
    title: 'Accès aux informations',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Restez informé grâce à une documentation complète et des ressources actualisées. Vous pouvez consulter les dernières informations techniques et les mises à jour sur nos fonctionnalités.

      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
