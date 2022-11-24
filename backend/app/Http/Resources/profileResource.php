<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class profileResource extends JsonResource
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
            'public_name' => $this->public_name,
            'description' => $this->description,
            'photo' => $this->photo,
            'phone' => $this->phone,
            'birth_date' => $this->birth_date,
            'alcohol_pref' => $this->alcohol_pref,
            'smoke_pref' => $this->smoke_pref
        ];
    }
}
