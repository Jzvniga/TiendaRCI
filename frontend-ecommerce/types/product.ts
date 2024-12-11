export interface Product {
    data: Data[];
    meta: Meta;
}

export interface Data {
    id:            number;
    documentId:    string;
    productName:   string;
    slug:          string;
    description:   string;
    active:        boolean;
    material:      string;
    isFeatured:    boolean;
    createdAt:     Date;
    updatedAt:     Date;
    publishedAt:   Date;
    locale:        null;
    origen:        string;
    precio:        number;
    images:        Image[];
    categories:    Category[];
    localizations: any[];
}

export interface Category {
    id:           number;
    documentId:   string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    locale:       null;
    categoryName: string;
    slug:         string;
}

export interface Image {
    id:                number;
    documentId:        string;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats | null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
    publishedAt:       Date;
    locale:            null;
}

export interface Formats {
    thumbnail: Large;
    small:     Large;
    medium:    Large;
    large:     Large;
}

export interface Large {
    name:        string;
    hash:        string;
    ext:         EXT;
    mime:        MIME;
    path:        null;
    width:       number;
    height:      number;
    size:        number;
    sizeInBytes: number;
    url:         string;
}

export enum EXT {
    Jpg = ".jpg",
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
