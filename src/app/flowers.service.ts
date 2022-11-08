import { Injectable } from '@angular/core';

export interface Flower {
  category: string;
  price: number;
  instructions: string;
  photo?: string;
  name: string;
  productId: number;
}
@Injectable({
  providedIn: 'root',
})
export class FlowersService {
  flowers: Flower[] = [
    {
      category: 'Shrubs',
      price: 15.99,
      instructions:
        'Large double. Good grower, heavy bloomer. Early to mid-season, acid loving plants. Plant in moist well drained soil with pH of 4.0-5.5.',
      photo: 'california_snow.jfif',
      name: 'Azalea',
      productId: 1,
    },
    {
      category: 'Shrubs',
      price: 33.99,
      instructions:
        'Beautiful large royal purple flowers adorn attractive satiny green leaves that turn orange\\/red in cold weather. Grows to up to 18 feet, or prune annually to shorten.',
      photo: 'princess_flower.jfif',
      name: 'Tibouchina Semidecandra',
      productId: 2,
    },
    {
      category: 'Shrubs',
      price: 12.99,
      instructions:
        'Blooms in summer, 20-35 inches high. Fertilize regularly for best results. Full sun, drought tolerant.',
      photo: 'haight_ashbury.jfif',
      name: 'Hibiscus',
      productId: 3,
    },
    {
      category: 'Shrubs',
      price: 5.99,
      instructions:
        'Quick-growing, herbaceous, shrub reaching up to 30 inches in height, forming a rounded, dense bush.',
      photo: 'mona_lavender.jfif',
      name: 'Plectranthus',
      productId: 4,
    },
    {
      category: 'Shrubs',
      price: 15.99,
      instructions:
        'Slow growing, upright to spreading shrub. Oval, glossy, leaves and profuse winter to spring blooming flowers.',
      photo: 'camellia.jfif',
      name: 'Camellia Japonica',
      productId: 5,
    },
    {
      category: 'Shrubs',
      price: 10.99,
      instructions:
        'Thorny woody vine scrambles over other plants with their hooked thorns. Pest free.',
      photo: 'bougainvillea.jfif',
      name: 'Bougainvillea Spectabilis',
      productId: 6,
    },
    {
      category: 'Shrubs',
      price: 22.99,
      instructions:
        'Deep purple colored flowers bushy rounded growth habit to 3 feet tall. Plant in full sun. Water regularly.',
      photo: 'rosa_burgundy.jfif',
      name: 'Rosa Burgundy',
      productId: 7,
    },
    {
      category: 'Shrubs',
      price: 22.99,
      instructions:
        'Deep purple colored flowers bushy rounded growth habit to 3 feet tall. Plant in full sun. Water regularly.',
      photo: 'rosa_iceberg.jfif',
      name: 'Rosa Iceberg',
      productId: 8,
    },
    {
      category: 'Container Plants',
      price: 45.99,
      instructions:
        'They do not thrive indoors, where the light is too dim, and humidity too low, for them to grow properly.',
      photo: 'bonsai.jfif',
      name: 'Bonsai Tree',
      productId: 9,
    },
    {
      category: 'Container Plants',
      price: 12.99,
      instructions:
        'Blooms continuously from early spring to first frost. Full sun or part shade, moist well-drained soil.',
      photo: 'calibrachoa.jfif',
      name: 'Calibrachoa Noa',
      productId: 10,
    },
    {
      category: 'Container Plants',
      price: 14.99,
      instructions:
        'The flowers last about ten weeks. They have a waxy texture and reach a height of more than 20 inches.',
      name: 'waxy',
      productId: 11,
    },
    {
      category: 'Container Plants',
      price: 4.99,
      instructions:
        'Creamy-white centers, medium green outer foliage with flattened outer foliage.',
      name: 'Brassica Oleracea',
      productId: 12,
    },
    {
      category: 'Container Plants',
      price: 4.99,
      instructions:
        'Compact mounds of colorful dainty flowers, good for window boxes. Fertile well drained soil.',
      name: 'Viola Penny Orange Jump Up',
      productId: 13,
    },

    {
      category: 'Container Plants',
      price: 4.99,
      instructions:
        'Well drained neutral to slightly acid soil, bright light. Do not over-fertilize or these flowers will lose scent.',
      name: 'Pelargonium Peltatum',
      productId: 15,
    },
    {
      category: 'Container Plants',
      price: 3.99,
      instructions:
        'Compact mounds of colorful dainty flowers, good for window boxes. Fertile well drained soil.',
      name: 'Pansy Blue Shades',
      productId: 16,
    },
    {
      category: 'Container Plants',
      price: 3.99,
      instructions:
        'Compact mounds of colorful dainty flowers, good for window boxes. Fertile well drained soil.',
      name: 'Pansy Yellow with Blotch',
      productId: 17,
    },
    {
      category: 'Container Plants',
      price: 25.99,
      instructions:
        'Choose the brightest windows in your house for your orchids, place on an humidity tray and spray regularly.',
      name: 'Phalaenopsis Purple',
      productId: 18,
    },
    {
      category: 'Herbaceous Perennials',
      price: 5.99,
      instructions:
        'They thrive in fertile, fast draining, slightly alkaline (pH 6.75) soil. Avoid overwatering.',
      name: 'Dianthus',
      productId: 19,
    },
    {
      category: 'Herbaceous Perennials',
      price: 9.99,
      instructions:
        'Chrysanthemums respond to plenty of food and moisture, and prefer full sun.',
      name: 'Chrysanthemum',
      productId: 20,
    },
    {
      category: 'Herbaceous Perennials',
      price: 7.99,
      instructions:
        'Summer flowering, 12–18” high, likes full sun and well drained soil. Drought tolerant.',
      name: 'Armeria Alliacea',
      productId: 21,
    },
    {
      category: 'Herbaceous Perennials',
      price: 6.99,
      instructions:
        'Grows to 15 inches. The species is easy to grow from seeds or cuttings. This species prefers full sun.',
      name: 'alvia Splendens',
      productId: 22,
    },
    {
      category: 'Herbaceous Perennials',
      price: 8.99,
      instructions:
        'Easily grown, tolerant of drought and poor soil, flower and foliage improves with feeding. Full sun.',
      name: 'Agapanthus',
      productId: 23,
    },
    {
      category: 'Herbaceous Perennials',
      price: 5.99,
      instructions:
        'These plants are very hardy, easy to grow, and increase readily. Average flower size is 3-4 inches in diameter.',
      name: 'Iris Sibirica',
      productId: 24,
    },
    {
      category: 'Herbaceous Perennials',
      price: 9.99,
      instructions:
        'Chrysanthemums grow best and produce the most flowers if they are planted in full sunshine.',
      name: 'Chrysanthemum',
      productId: 25,
    },
    {
      category: 'Herbaceous Perennials',
      price: 10.99,
      instructions:
        'Grown primarily for its attractive silvergray foliage rather than its yellow flowers. Drought tolerant.',
      name: 'Senecio Cineraria',
      productId: 26,
    },
    {
      category: 'Cacti & Succulents',
      price: 18.99,
      instructions:
        'Add water until there is half inch of dry soil on the surface. Do not water again until the soil is completely dry.',
      name: 'Red Cactus',
      productId: 27,
    },
    {
      category: 'Cacti & Succulents',
      price: 30.99,
      instructions: 'Drought tolerant, well drained soil. Prefers full sun.',
      name: 'Aloe Vera',
      productId: 28,
    },
    {
      category: 'Cacti & Succulents',
      price: 20.99,
      instructions:
        'Easy to care for, requiring watering only when they’re dry. They like bright but indirect light.',
      name: 'Schlumbergera',
      productId: 29,
    },
    {
      category: 'Cacti & Succulents',
      price: 18.5,
      instructions:
        'Locate it in a place where it is exposed to at least a few hours of direct sunlight.',
      name: 'Senecio Rowleyanus',
      productId: 30,
    },
    {
      category: 'Cacti & Succulents',
      price: 12.99,
      instructions:
        'These plants blend in among the stones as a means of protection. Grazing animals would otherwise eat them.',
      name: 'Cacti',
      productId: 31,
    },
    {
      category: 'Cacti & Succulents',
      price: 55.99,
      instructions:
        'The Mexican Fence Post will eventually reach 20 feet tall. Protect the growing tips with Styrofoam cups on the tops.',

      name: 'Pachycereus Marginatus',
      productId: 32,
    },
    {
      category: 'Cacti & Succulents',
      price: 25.99,
      instructions:
        'Growing as a large roughly spherical globe, it may eventually reach over a meter in height after many years.',

      name: 'Echinocactus Grusonii',
      productId: 33,
    },
    {
      category: 'Cacti & Succulents',
      price: 16.99,
      instructions:
        'The plants should be kept almost completely dry during the winter months, once a month should be fine.',
      name: 'Opuntia Falcata',
      productId: 34,
    },
  ];
  constructor() {}
}
