/**
 * WP-API client-js (https://github.com/WP-API/client-js) for TypeScript
 */

declare module WPApi {

    interface Item {
        author?: number;
        comment_status?: string;
        content?: Renderable;
        date?: Date;
        date_gmt?: Date;
        parent?: string;
        password?: string;
        ping_status?: string;
        slug?: string;
        status?: string;
        title?: string;
    }

    interface Context {
        default: string;
        description: string;
        enum: string[];
        required: boolean;
    }

    interface Category {
        description?: string;
        name?: string;
        parent?: string;
        slug?: string;
    }

    interface Comment {
        author?: number;
        author_email?: string;
        author_name?: string;
        author_url?: string;
        content?: string;
        date?: Date;
        date_gmt?: Date;
        karma?: number;
        parent?: number;
        post?: number;
        status?: string;
        type?: string;
    }

    interface Media extends Item {
        alt_text: string;
        caption: string;
        description: string;
        post: number;
    }

    interface Options {
        context: Context;
    }

    interface Page extends Item {
        excerpt?: Renderable;
        featured_media?: number;
        menu_order?: number;
        template?: string;
    }

    interface PageMeta {
        key?: string;
        value?: string;
    }

    interface Post extends Item {
        categories: Category[];
        excerpt?: Renderable;
        featured_media?: number;
        format?: string;
        sticky?: boolean;
        tags?: Tag[];
    }

    interface PostsMeta extends PageMeta { }

    interface Schema {
        _links: Backbone.ObjectHash;
        namespace?: string;
        routes: Backbone.ObjectHash;
    }

    interface Tag {
        description?: string;
        name?: string;
        slug?: string;
    }

    interface User {
        capabilities?: any;
        description?: string;
        email?: string;
        first_name?: string;
        last_name?: string;
        name?: string;
        nickname?: string;
        role?: string;
        slug?: string;
        username?: string;
    }

    interface CommentResponse extends Comment {
        id: number;
        author_avatar_urls: AvatarUrls;
        author_ip: string;
        author_user_agent: string;
        link: string;
    }

    interface Renderable {
        raw?: string;
        rendered: string;
    }

    interface AvatarUrls {
        24: string;
        48: string;
        96: string;
    }

    /**
     * ReadOnly
     */
    interface ItemResponse extends WPApi.Item {
        guid?: Renderable;
        link?: string;
        id: number;
        type?: string;
    }

    interface MediaResponse extends Media, ItemResponse {
        media_type: string;
        media_details: any;
        source_url: string;
    }

    interface PageResponse extends Page, ItemResponse { }

    interface PostMeta {
        /**
         * @readonly
         */
        id?: number;
        key?: string;
        value?: string;
    }

    interface PostRevisions {
        author: number;
        date:  string;
        date_gmt: string;
        guid: string;
        id: number;
        modified: string;
        parent: number;
        slug: string;
        title: string;
    }

    interface PostTerms {
        order?: string;
        orderby?: string;
    }

    interface Term {
        /** @readonly */
        id?: number;
        /** @readonly */
        count?:number;
        description?: string;
        /**@readonly */
        link?:string;
        /**@required */
        name?: string;
        slug?: string;
        /**@readonly */
        taxnonomy?:string;
    }

    interface PostResponse extends Post,ItemResponse { }

    interface Statuses {
        name: string;
        private: boolean;
        protected: boolean;
        public: boolean;
        queryable: boolean;
        show_in_list: boolean;
        slug: string;
    }

    interface Taxonomy {
        description: string;
        hierarchal: boolean;
        labels: TaxnomyLabels;
        name: string;
        slug: string;
        show_cloud: boolean;
        types: string[];
    }

    interface TaxnomyLabels {
        name?: string;
        singular_name?: string;
        search_items?: string;
        popular_items?: string;
        all_items?: string;
        parent_item?: string;
        parent_item_colon?: string;
        edit_item?: string;
        view_item?: string;
        update_item?: string;
        add_new_item?: string;
        new_item_name?: string;
        separate_items_with_commas?: string;
        add_or_remove_items?: string;
        choose_from_most_used?: string;
        not_found?: string;
        no_terms?: string;
        items_list_navigation?: string;
        items_list?: string;
        menu_name?: string;
        name_admin_bar?: string;
    }

    /**
     * Custom Post Type
     */
    interface Type {
        description: string;
        hierarchical: boolean;
        labels: TypeLabels;
        name: string;
        slug: string;
    }

    interface TypeLabels {
        name?: string;
        singular_name?: string;
        add_new?: string;
        add_new_item?: string;
        edit_item?: string;
        new_item?: string;
        view_item?: string;
        search_items?: string;
        not_found?: string;
        not_found_in_trash?: string;
        parent_item_colon?: string;
        all_items?: string;
        archives?: string;
        insert_into_item?: string;
        uploaded_to_this_item?: string;
        featured_image?: string;
        set_featured_image?: string;
        remove_featured_image?: string;
        use_featured_image?: string;
        filter_items_list?: string;
        items_list_navigation?: string;
        items_list?: string;
        menu_name?: string;
        name_admin_bar?: string;
    }

    /**
     * User Response
     */
    interface UserResponse extends User {
        id: number;
        link: string;
        avatar_urls: AvatarUrls;
        registered_date: string;
        extra_capabilities: any;
    }

    /**
     * User for create
     */
    interface UserNew extends User {
        username: string;
        email: string;
    }
}

declare module WP_API {

    interface CollectionState {
        data: {[key: string]: string};
        currentPage: number;
        totalPages: number;
        totalObjects: number;
    }

    module api {

        var views: any;
        var loadPromise: JQueryPromise<{}>;

        module utils {
            function parseISO8601(d: Date): number;
        }

        module models {

            class WPApiBaseModel extends Backbone.Model {
            }

            class Category extends WPApiBaseModel {
                defaults(): () => WPApi.Category;
                options: WPApi.Options;
            }

            class Comment extends WPApiBaseModel {
                defaults(): () => WPApi.Comment;
                options: WPApi.Options;
            }

            class Media extends WPApiBaseModel {
                defaults(): () => WPApi.Media;
                options: WPApi.Options;
            }

            class Page extends WPApiBaseModel {
                defaults(): () => WPApi.Page;
                options: WPApi.Options;
            }

            class PageMeta extends WPApiBaseModel {
                defaults(): () => WPApi.PageMeta;
                options: WPApi.Options;
            }

            class PageRevision extends WPApiBaseModel {
                options: WPApi.Options;
            }

            class Post extends WPApiBaseModel {
                defaults(): () => WPApi.Post;
                options: WPApi.Options;
            }

            class PostRevision extends WPApiBaseModel {
                defaults(): () => WPApi.PostRevisions;
                options: WPApi.Options;
            }

            class PostsMeta extends WPApiBaseModel {
                defaults(): () => WPApi.PostsMeta;
                options: WPApi.Options;
            }

            class Schema extends WPApiBaseModel {
                defaults(): () => WPApi.Schema;
                apiRoot: string;
                versionString: string;
                options: WPApi.Options;
            }

            class Status extends WPApiBaseModel {
                options: WPApi.Options;
            }

            class Tag extends WPApiBaseModel {
                defaults(): () => WPApi.Tag;
                options: WPApi.Options;
            }

            class Taxonomy extends WPApiBaseModel {
                defaults(): () => WPApi.Taxonomy;
                options: WPApi.Options;
            }

            class Type extends WPApiBaseModel {
                defaults(): () => WPApi.Type;
                options: WPApi.Options;
            }

            class User extends WPApiBaseModel {
                defaults(): () => WPApi.User;
                options: WPApi.Options;
            }
        }

        module collections {

            class BaseCollection<TModel extends WP_API.api.models.WPApiBaseModel> extends Backbone.Collection<TModel> {
                state: CollectionState;
                sync(method: string, model: Backbone.Model, options?: JQueryAjaxSettings): any;
                more(options?: Backbone.CollectionFetchOptions): JQueryPromise<{}>;
                hasMore(): boolean;
            }

            class Categories extends BaseCollection<WP_API.api.models.Category>{ }

            class Comments extends BaseCollection<WP_API.api.models.Comment>{ }

            class Media extends BaseCollection<WP_API.api.models.Media> { }

            class PageMeta extends BaseCollection<WP_API.api.models.PageMeta> { }

            class PageRevision extends BaseCollection<WP_API.api.models.PageRevision> { }

            class Pages extends BaseCollection<WP_API.api.models.Page> { }

            class PostMeta extends BaseCollection<WP_API.api.models.PostsMeta>{ }

            class PostRevisions extends BaseCollection<WP_API.api.models.PageRevision>{ }

            class Posts extends BaseCollection<WP_API.api.models.Post> { }

            class Statuses extends BaseCollection<WP_API.api.models.Status>{ }

            class Tags extends BaseCollection<WP_API.api.models.Tag> { }

            class Taxonomies extends BaseCollection<WP_API.api.models.Taxonomy> { }

            class Types extends BaseCollection<WP_API.api.models.Type> { }

            class Users extends BaseCollection<WP_API.api.models.User> { }

            class V2 extends BaseCollection<Backbone.Model> { }
        }
    }
}

declare interface Date {
    toISOString(): string;
}

export = WP_API;
