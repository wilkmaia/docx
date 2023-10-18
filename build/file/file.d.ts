import { AppProperties } from "./app-properties/app-properties";
import { ContentTypes } from "./content-types/content-types";
import { CoreProperties, IPropertiesOptions } from "./core-properties";
import { CustomProperties } from "./custom-properties";
import { DocumentWrapper } from "./document-wrapper";
import { ISectionPropertiesOptions } from "./document/body/section-properties";
import { FooterWrapper } from "./footer-wrapper";
import { FootnotesWrapper } from "./footnotes-wrapper";
import { Footer, Header } from "./header";
import { HeaderWrapper } from "./header-wrapper";
import { Media } from "./media";
import { Numbering } from "./numbering";
import { Comments } from "./paragraph/run/comment-run";
import { Relationships } from "./relationships";
import { Settings } from "./settings";
import { Styles } from "./styles";
import { FileChild } from "./file-child";
export interface ISectionOptions {
    readonly headers?: {
        readonly default?: Header;
        readonly first?: Header;
        readonly even?: Header;
    };
    readonly footers?: {
        readonly default?: Footer;
        readonly first?: Footer;
        readonly even?: Footer;
    };
    readonly properties?: ISectionPropertiesOptions;
    readonly children: readonly FileChild[];
}
export declare class File {
    private currentRelationshipId;
    private readonly documentWrapper;
    private readonly headers;
    private readonly footers;
    private readonly coreProperties;
    private readonly numbering;
    private readonly media;
    private readonly fileRelationships;
    private readonly footnotesWrapper;
    private readonly settings;
    private readonly contentTypes;
    private readonly customProperties;
    private readonly appProperties;
    private readonly styles;
    private readonly comments;
    constructor(options: IPropertiesOptions);
    private addSection;
    private createHeader;
    private createFooter;
    private addHeaderToDocument;
    private addFooterToDocument;
    private addDefaultRelationships;
    get Document(): DocumentWrapper;
    get Styles(): Styles;
    get CoreProperties(): CoreProperties;
    get Numbering(): Numbering;
    get Media(): Media;
    get FileRelationships(): Relationships;
    get Headers(): readonly HeaderWrapper[];
    get Footers(): readonly FooterWrapper[];
    get ContentTypes(): ContentTypes;
    get CustomProperties(): CustomProperties;
    get AppProperties(): AppProperties;
    get FootNotes(): FootnotesWrapper;
    get Settings(): Settings;
    get Comments(): Comments;
}
