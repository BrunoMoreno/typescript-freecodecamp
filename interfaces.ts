interface ICircle {
  readonly id: string;
  center: {
    x: number;
    y: number;
  },
  radius: number;
  color?: string; 
}
  
const circle1: ICircle = {
  id: '001',
  center: { x: 0 },
  radius: 8,
};
const circle2: ICircle = {
  id: '002',
  center: { x: 0, y: 0 },
  radius: 8,
} 

circle2.color = '#666';
circle2.id = '003';  

interface ICircleWithArea extends ICircle {
  getArea: () => number;
}

const circle3: ICircleWithArea = {
  id: '003',
  center: { x: 0, y: 0 },
  radius: 6,
  color: '#fff',
  getArea: function () {
    return (this.radius ** 2) * Math.PI;
  },
};