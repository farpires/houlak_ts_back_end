export type TGetArtistData = IArtistData[] | Error;

export interface IArtistData {
    artists: Artist[];
    images: Image[];
    label: string;
    name: string;
    popularity: number;
    external_urls: string;
}

interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface ExternalUrls {
    spotify: string;
}

interface Image {
    height: number;
    url: string;
    width: number;
}

