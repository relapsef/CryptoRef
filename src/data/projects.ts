import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ink',
    name: 'Ink Chain',
    short: 'Kraken L2',
    description: 'L2 экосистема от Kraken. Подходит для активностей, квестов, NFT, bridge и будущего фарма $INK.',
    category: 'Testnet / Mainnet',
    reward: 'Points / возможный $INK',
    funding: 'Kraken ecosystem',
    logo: '🟣',
    website: 'https://inkonchain.com',
    status: 'active',
    tags: ['L2', 'Kraken', 'Quests', 'NFT']
  },
  {
    id: 'citrea',
    name: 'Citrea',
    short: 'Bitcoin L2',
    description: 'BTC L2 проект с активностями, поинтами и потенциальным дропом для ранних пользователей.',
    category: 'Bitcoin L2',
    reward: 'Points / Genesis rewards',
    funding: '$16.7M+',
    logo: '🟠',
    website: 'https://citrea.xyz',
    status: 'active',
    tags: ['BTC', 'L2', 'Airdrop']
  },
  {
    id: 'monad',
    name: 'Monad',
    short: 'High-performance L1',
    description: 'Один из самых ожидаемых L1 проектов. Комьюнити-активности, тестнет, Discord и экосистемные задания.',
    category: 'Layer 1',
    reward: 'Possible airdrop',
    funding: '$225M+',
    logo: '🟪',
    website: 'https://monad.xyz',
    status: 'active',
    tags: ['L1', 'Testnet', 'Discord']
  },
  {
    id: 'arc',
    name: 'Arc Network',
    short: 'Circle ecosystem',
    description: 'RWA и платежная экосистема. Можно собирать активности, роли, поинты и ранний статус.',
    category: 'RWA / Payments',
    reward: 'Points / WL',
    funding: '$222M presale',
    logo: '🔵',
    website: '#',
    status: 'active',
    tags: ['RWA', 'Circle', 'WL']
  },
  {
    id: 'rax',
    name: 'RAX Finance',
    short: 'AI x RWA',
    description: 'AI x RWA проект с waitlist, квестами и активностями для ранних пользователей.',
    category: 'AI / RWA',
    reward: 'WL / possible rewards',
    funding: '$4M',
    logo: '🧠',
    website: '#',
    status: 'active',
    tags: ['AI', 'RWA', 'Waitlist']
  },
  {
    id: 'push',
    name: 'Push Chain',
    short: 'ex Push Protocol',
    description: 'Коммуникационный Web3 проект с сезонными наградами, PUSD и экосистемными заданиями.',
    category: 'Web3 Infra',
    reward: 'Season rewards',
    funding: '$11.97M',
    logo: '📨',
    website: 'https://push.org',
    status: 'active',
    tags: ['Infra', 'Rewards', 'PUSD']
  }
];
