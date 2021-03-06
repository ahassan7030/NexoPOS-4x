<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Services\Options;

class SignUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $options    =   app()->make( Options::class );

        return $options->get( 'ns_registration_enabled' ) === 'yes';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username'          =>  'required|min:6|unique:nexopos_users',
            'email'             =>  'email|unique:nexopos_users',
            'password'          =>  'required',
            'password_confirm'  => 'same:password'
        ];
    }
}
