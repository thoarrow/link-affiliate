import { BreadcrumbItem } from '../component/Breadcrumb';

export interface IPageProps {
  title?: string;
  isWrapper?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
}
