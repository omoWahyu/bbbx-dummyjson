import React, { useState } from 'react';
import { iProduct } from '../../utils/types';

interface FilterSearchBarProps {
    data: iProduct[];
    onFilter: (filteredProducts: iProduct[]) => void;
}

const FilterSearchBar: React.FC<FilterSearchBarProps> = ({ data: products, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

    const categories = Array.from(new Set(products.map(product => product.category)));
    categories.unshift('Semua');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value.toLowerCase();
        setSearchTerm(val);
        filterProducts(val, selectedCategory);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const val = event.target.value;
        setSelectedCategory(val);
        filterProducts(searchTerm, val);
    };

    const filterProducts = (search: string, category: string) => {
        const filtered = products.filter(product => {
            const isInCategory = category === 'Semua' || product.category === category;
            const matchesSearchTerm = product.title.toLowerCase().includes(search);
            return isInCategory && matchesSearchTerm;
        });
        onFilter(filtered);
    };

    return (
        <div className="flex items-center justify-between mb-4">
            <input
                type="text"
                placeholder="Cari Apapun dissini..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="border p-2 h-12 rounded-md w-full mr-4"
            />
            <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border p-2 h-12 rounded-md"
            >
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterSearchBar;

