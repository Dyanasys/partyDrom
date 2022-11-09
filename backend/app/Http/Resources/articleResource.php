<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class articleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'author' => $this->author,
            'created_at' => $this->crated_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
