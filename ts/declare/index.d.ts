/**
 * WP-API client-js (https://github.com/WP-API/client-js) for TypeScript
 */

declare module WPApi {

    interface Comment {
        author?: number;
        author_email?: string;
        author_name?: string;
        author_url?: string;
        content?: string;
        date?: any;
        date_gmt?: any;
        karma?: number;
        parent?: number;
        post?: number;
        status?: string;
        type?: string;
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

    interface Item {
        date?: any;
        date_gmt?: any;
        modified?: any;
        modified_gmt?: any;
        password?: string;
        slug?: string;
        status?: string;
        content?: Renderable;
        author?: number;
        excerpt?: Renderable;
        featured_image?: number;
        comment_status?: string;
        ping_status?: string;
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

    interface Media extends Item {
        alt_text: string;
        caption: string;
        description: string;
        post: number;
    }

    interface MediaResponse extends Media, ItemResponse {
        media_type: string;
        media_details: any;
        source_url: string;
    }

    interface Page extends Item {
        menu_order?: number;
        template?: string;
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

    interface Post extends Item {
        format?: string;
        sticky?: boolean;
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

    interface User {
        name?: string;
        username?: string;
        first_name?: string;
        last_name?: string;
        email?: string;
        description?: string;
        nickname?: string;
        slug?: string;
        role?: string;
        capabilities: any;
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

    class Hoge {
    }

    module api {

        var views: any;

        module utils {
            function parseISO8601(d: Date): number;
        }

        module models {

            class WPApiBaseModel extends Backbone.Model {
                sync(method: string, model: Backbone.Model, options: any): any;
                urlRoot: string;
            }

            class User extends WPApiBaseModel {
                defaults(): () => WPApi.User;//??
            }

            class Taxonomy extends WPApiBaseModel {
                defaults(): () => WPApi.Taxonomy;
            }

            class Term extends WPApiBaseModel {
                defaults(): () => WPApi.Term;
            }

            class Post extends WPApiBaseModel {
                defaults(): () => WPApi.Post;
            }

            class Page extends WPApiBaseModel {
                defaults(): () => WPApi.Page;
            }

            class PostRevision extends WPApiBaseModel {
                defaults(): () => WPApi.PostRevisions;
                url: () => string
            }

            class Media extends WPApiBaseModel {
                defaults(): () => WPApi.Media;
            }

            class Comment extends WPApiBaseModel {
                defaults(): () => WPApi.Comment;
            }

            class PostType extends WPApiBaseModel {
                defaults(): () => WPApi.Type;
                save(): boolean;
                destroy(): boolean;
            }

            class PostStatus extends WPApiBaseModel {
                defaults(): () => PostStatus;
                save(): boolean;
                destroy(): boolean;
            }

            class Schema extends WPApiBaseModel {
                defaults(): () => any;
                save(): boolean;
                destroy(): boolean;
            }
        }

        module collections {

            class BaseCollection<TModel extends WP_API.api.models.WPApiBaseModel> extends Backbone.Collection<TModel> { }

            class Posts extends BaseCollection<WP_API.api.models.Post> { }

            class Pages extends BaseCollection<WP_API.api.models.Page> { }

            class Users extends BaseCollection<WP_API.api.models.User> { }

            class PostStatuses extends BaseCollection<WP_API.api.models.PostStatus>{ }

            class MediaLibrary extends BaseCollection<WP_API.api.models.Media> { }

            class Taxonomies extends BaseCollection<WP_API.api.models.Taxonomy> { }

            class Comments extends BaseCollection<WP_API.api.models.Comment>{ }

            class PostTypes extends BaseCollection<WP_API.api.models.PostType> { }

            class Terms extends BaseCollection<WP_API.api.models.Term>{ }

            class Revisions extends BaseCollection<WP_API.api.models.PostRevision>{ }
        }
    }
}

declare interface Date {
    toISOString(): string;
}

export = WP_API;
