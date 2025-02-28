<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\InfInvites;

class InvitesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        InfInvites::factory()->create([
            'family' => 'Lara Ávila',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Lara Castelin',
            'adults' => 2,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Lara Yegues',
            'adults' => 2,
            'children' => 2,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Lara Rodríguez',
            'adults' => 1,
            'children' => 2,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Jimenez Morillo',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Jimenez Morillo',
            'adults' => 1,
            'children' => 2,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Lara Finol',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Lara Finol',
            'adults' => 2,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Vidal Ávila',
            'adults' => 4,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Rodríguez Ávila',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Ávila Sifontes',
            'adults' => 3,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sr Jose Ávila Millán',
            'adults' => 2,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Millán de Ávila',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Ávila Castellano',
            'adults' => 2,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Duran Lara',
            'adults' => 4,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Berenice Lara',
            'adults' => 3,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sr Rafael Lara',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sr Agustin Lara',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Polanco Fariña',
            'adults' => 3,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Andrade Fariña',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Salazar Ávila',
            'adults' => 3,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Escobar Rodríguez',
            'adults' => 2,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Suarez Ramírez',
            'adults' => 3,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Ruth Núñez',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sr Reinaldo Ávila Núñez',
            'adults' => 2,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sr Gonzalo Ávila Núñez',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Niurka Millán',
            'adults' => 1,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Carolina Millán',
            'adults' => 1,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Georgina Núñez',
            'adults' => 1,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Millán',
            'adults' => 2,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Navarro Gonzáles',
            'adults' => 3,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Andreina Navarro',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Navarro Millán',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Noriega Navarro',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Hernández Navarro',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Guevara Millán',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Andreina Guevara Millán',
            'adults' => 3,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Martínez Rosario',
            'adults' => 2,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Salazar Martínez',
            'adults' => 3,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Francy Morgado',
            'adults' => 1,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Gil Gil',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Maria Jose Gil',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Sol Clarette Rodriguez',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra Maxima Salazar',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'León Henrique',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Salazar Salazar',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Ortiz Salgado',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Ávila',
            'adults' => 2,
            'children' => 2,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Castelin Adrian',
            'adults' => 4,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sr Jose Suárez Morillo',
            'adults' => 1,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Acosta Fuentes',
            'adults' => 2,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Srta Eucaris Guerra',
            'adults' => 0,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Srta Oriannys Ortiz',
            'adults' => 0,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Srto Alexander Salazar',
            'adults' => 0,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Srta Danna Martinez',
            'adults' => 0,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Srto Valerio',
            'adults' => 0,
            'children' => 1,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Finol Garcia',
            'adults' => 2,
            'children' => 2,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
        InfInvites::factory()->create([
            'family' => 'Sra. Elizabeth Rodriguez',
            'adults' => 1,
            'children' => 0,
            'confirm_adults' => 0,
            'confirm_children' => 0,
            'confirm' => false
        ]);
    }
}
