<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ShopController extends Controller
{
    /**
     * Display a paginated listing of the shops.
     */
public function index(Request $request = null)
{
    $actualRequest = $request ?? request();  // Fallback to global request() if injected one is null
    $perPage = $actualRequest->get('per_page', 10);
    $shops = Shop::latest()->paginate($perPage);

    // Add full URL for logo & banner
    $shops->getCollection()->transform(function ($shop) {
        $shop->logo = $shop->logo ? asset('storage/' . $shop->logo) : null;
        $shop->banner = $shop->banner ? asset('storage/' . $shop->banner) : null;
        return $shop;
    });

    return response()->json($shops);
}

    /**
     * Store a newly created shop with image upload.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'            => 'required|string|max:255',
            'logo'            => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'banner'          => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096',
            'description'     => 'nullable|string',
            'mobile_number'   => 'nullable|string|max:20',
            'whatsapp_number' => 'nullable|string|max:20',
            'address'         => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $validator->validated();

        // Handle file uploads
        if ($request->hasFile('logo')) {
            $data['logo'] = $request->file('logo')->store('shops', 'public');
        }
        if ($request->hasFile('banner')) {
            $data['banner'] = $request->file('banner')->store('shops', 'public');
        }

        $shop = Shop::create($data);

        // Append public URLs
        $shop->logo = $shop->logo ? asset('storage/' . $shop->logo) : null;
        $shop->banner = $shop->banner ? asset('storage/' . $shop->banner) : null;

        return response()->json([
            'message' => 'Shop created successfully!',
            'data' => $shop,
        ], 201);
    }

    /**
     * Display a specific shop.
     */
    public function show($id)
    {
        $shop = Shop::find($id);

        if (!$shop) {
            return response()->json(['message' => 'Shop not found'], 404);
        }

        $shop->logo = $shop->logo ? asset('storage/' . $shop->logo) : null;
        $shop->banner = $shop->banner ? asset('storage/' . $shop->banner) : null;

        return response()->json($shop);
    }

    /**
     * Update the specified shop and handle image replacement.
     */
    public function update(Request $request, $id)
    {
        $shop = Shop::find($id);

        if (!$shop) {
            return response()->json(['message' => 'Shop not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name'            => 'sometimes|required|string|max:255',
            'logo'            => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'banner'          => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096',
            'description'     => 'nullable|string',
            'mobile_number'   => 'nullable|string|max:20',
            'whatsapp_number' => 'nullable|string|max:20',
            'address'         => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        // Handle file uploads
        if ($request->hasFile('logo')) {
            // Delete old logo if exists
            if ($shop->logo && Storage::disk('public')->exists($shop->logo)) {
                Storage::disk('public')->delete($shop->logo);
            }
            $data['logo'] = $request->file('logo')->store('shops', 'public');
        }

        if ($request->hasFile('banner')) {
            if ($shop->banner && Storage::disk('public')->exists($shop->banner)) {
                Storage::disk('public')->delete($shop->banner);
            }
            $data['banner'] = $request->file('banner')->store('shops', 'public');
        }

        $shop->update($data);

        // Append full URLs
        $shop->logo = $shop->logo ? asset('storage/' . $shop->logo) : null;
        $shop->banner = $shop->banner ? asset('storage/' . $shop->banner) : null;

        return response()->json([
            'message' => 'Shop updated successfully!',
            'data' => $shop,
        ]);
    }

    /**
     * Remove the specified shop.
     */
    public function destroy($id)
    {
        $shop = Shop::find($id);

        if (!$shop) {
            return response()->json(['message' => 'Shop not found'], 404);
        }

        // Delete files if exist
        if ($shop->logo && Storage::disk('public')->exists($shop->logo)) {
            Storage::disk('public')->delete($shop->logo);
        }
        if ($shop->banner && Storage::disk('public')->exists($shop->banner)) {
            Storage::disk('public')->delete($shop->banner);
        }

        $shop->delete();

        return response()->json(['message' => 'Shop deleted successfully!']);
    }
}