export interface DataProps {
    image: string;
    alt: string;
    grid?: number;
    title?: string;
    subTitle?: string;
    height?: string;
    width?: string;
    isVideo?: boolean;
    detailsKey?: string;
    column?: number;
    cols?: number;
    rows?: number;
}

export interface SlideShowProps {
    url: string;
    title?: string;
}
