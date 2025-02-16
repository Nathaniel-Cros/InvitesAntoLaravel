<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\InfInvites;
use PhpParser\Node\Scalar\String_;
use Throwable;

class InvitesInf extends Controller
{
    public function GetAll(): JsonResponse {
        try {
            $invites = InfInvites::all();

            return response()->json(['success' => true, 'data' => $invites], 200);
        } catch (Throwable $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
    public function GetByUUID($uuid): JsonResponse {
        try {
            $invite = InfInvites::where('id', $uuid)->first();
            if (!$invite) {
                return response()->json(['success' => false,'error' => 'Invite not found'], 404);
            }

            return response()->json(['success' => true, 'data' => $invite], 200);
        } catch (Throwable $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
    public function Create(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'family' => ['required', 'string', 'max:255'],
                'adults' => ['required', 'integer'],
                'children' => ['required', 'integer'],
            ]);

            $invite = new InfInvites;
            $invite->family = $request->input('family');
            $invite->adults = $request->input('adults');
            $invite->children = $request->input('children');
            $invite->confirm_adults = 0;
            $invite->confirm_children = 0;
            $invite->save();

            return response()->json(['success' => true, 'data' => $invite], 200);
        } catch (Throwable $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
    public function Update($uuid, Request $request): JsonResponse {
        try {
            $invite = InfInvites::where('id', $uuid)->first();
            if (!$invite) {
                return response()->json(['success' => false,'error' => 'Invite not found'], 404);
            }

            $invite->family = $request->input('family');
            $invite->adults = $request->input('adults');
            $invite->children = $request->input('children');
            $invite->confirm_adults = $request->input('confirm_adults');
            $invite->confirm_children = $request->input('confirm_children');
            $invite->save();

            return response()->json(['success' => true, 'data' => $invite], 200);
        } catch (Throwable $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }
}
