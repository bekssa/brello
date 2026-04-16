//Login object DTO
export interface LoginDto {
    email: string;
    password: string;
}

//Register object DTO
export interface RegisterDto {
    email: string;
    name: string;
    password: string;
}

export interface UserResponse {
    id: string;
    email: string;
    name: string;
    avatar_color: string;
    created_at: string;
}

export interface AuthResponse {
    access_token: string;
    token_type: string;
    user: UserResponse;
}

export interface RoomListItemResponse {
    id: string;
    name: string;
    slug: string;
    description: string;
    invite_link: string | null;
    participants_count: number; // Количество людей в комнате
    active_task_title: string | null; // Какая задача обсуждается сейчас
    last_activity_at: string;   // Дата-время последнего действия
    created_at: string;
}

export interface TaskCreateRequest {
    title: string;
    description?: string;
    position?: number | null;
}

export interface VoteSubmitRequest {
    value: string
}

