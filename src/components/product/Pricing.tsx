import { usdToIdr } from '../../utils/usdToIdr';

const Pricing: React.FC<{ price: number, discount: number }> = ({ price, discount }) => (
    <div className="flex flex-col -space-y-1">
        {discount >= 1 && (
            <p className="text-red-500 font-bold">{usdToIdr(Number(price - (price * discount / 100)))}</p>
        )}
        <p
            className={`
            ${discount >= 1 ? 'font-light text-sm text-gray-400 line-through' : ' font-bold'}
            `}
        >
            {usdToIdr(Number(price))}
        </p>

    </div>
);

export default Pricing;