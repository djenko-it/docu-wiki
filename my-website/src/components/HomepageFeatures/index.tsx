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
    title: 'Support d\'achat',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nous offrons un support dédié pour vous accompagner dans vos démarches d’achat groupé. Notre équipe est disponible pour vous conseiller, vous guider dans le choix des fournisseurs et vous aider à optimiser vos achats.
      </>
    ),
  },
  {
    title: 'Procédures d\'achat simplifiées',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Suivez des procédures d’achat claires et bien définies pour une expérience fluide. Qu’il s’agisse de la sélection des produits ou de la gestion des commandes, nous facilitons chaque étape.
      </>
    ),
  },
  {
    title: 'Accès à des informations privilégiées',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Profitez d’un accès exclusif à des informations sur les meilleurs fournisseurs et les dernières tendances du marché. Nos ressources actualisées vous permettent de prendre des décisions éclairées.
      </>
    ),
  },
  {
    title: 'Accès à des informations privilégiées',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Profitez d’un accès exclusif à des informations sur les meilleurs fournisseurs et les dernières tendances du marché. Nos ressources actualisées vous permettent de prendre des décisions éclairées.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
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
