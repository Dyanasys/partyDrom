<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class partyResource extends JsonResource
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
            'vacancies' => $this->vacancies,
            'title' => $this->title,
            'description' => $this->body,
            'photo' => $this->author,
            'date' => $this->date,
            'time' => $this->time,
            'alcohol' => $this->alcohol,
            'smoke' => $this->smoke,
            'id_location' => $this->id_location,
            'address' => $this->address,
            'meeting_details' => $this->meeting_details,
            'phone_contact' => $this->phone_contact,
            'created_at' => $this->crated_at,
            'updated_at' => $this->updated_at,
        ];

    }
}
