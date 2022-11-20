import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strngth: number;
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;