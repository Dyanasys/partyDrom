<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class requestResource extends JsonResource
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
            'id_user' => $this->id_user,
            'id_party' => $this->id_party,
            'canceled' => $this->canceled,
            'accepted' => $this->accepted
        ];
    }
}
