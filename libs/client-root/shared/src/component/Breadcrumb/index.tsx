import { Breadcrumb as AntBreadcrumb } from 'antd';
import { useRouter } from 'next/router';
import { VFC } from 'react';

import styles from './style.module.less';

export interface BreadcrumbItem {
  title?: string;
  icon?: any;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: VFC<BreadcrumbProps> = ({ items }) => {
  const router = useRouter();

  return (
    <AntBreadcrumb className={styles.breadcrumbContainer}>
      {items.map(({ title, icon, href }, index) => (
        <AntBreadcrumb.Item
          key={index}
          href={href}
          onClick={async (event) => {
            event.preventDefault();

            if (href) {
              await router.push(href);
            }
          }}
        >
          {icon}
          {title}
        </AntBreadcrumb.Item>
      ))}
    </AntBreadcrumb>
  );
};
