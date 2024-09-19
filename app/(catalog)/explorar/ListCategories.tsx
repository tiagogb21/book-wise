import { getCategories } from "@/app/api/categories/getAll";
import { Category } from "@prisma/client";
import { useEffect } from "react";

interface ListCategoriesProps {
    categories: Category[];
    setCategories: (category: Category[]) => void;
    setSelectedCategory: (category: string | null) => void;
}

export const ListCategories = ({categories, setCategories, setSelectedCategory} : ListCategoriesProps) => {
    useEffect(() => {
        async function getListOfCategories() {
            const fetchCategories = await getCategories();
            setCategories(fetchCategories);
        }
        getListOfCategories();
    }, []);

    return (
        <div className="flex flex-col gap-10">
            <ul className="flex items-center justify-between gap-10">
                <li
                    onClick={() => setSelectedCategory(null)}
                    className="px-4 py-1 border border-solid border-project-purple-100 rounded-full hover:bg-project-purple-100 text-project-gray-100 cursor-pointer"
                >
                    Todos
                </li>
                {categories.length > 0
                    ? categories.map(({ id, name }) => (
                          <li
                              key={id}
                              onClick={() => setSelectedCategory(id)}
                              className="px-4 py-1 border border-solid border-project-purple-100 rounded-full hover:bg-project-purple-100 text-project-gray-100 cursor-pointer"
                          >
                              {name}
                          </li>
                      ))
                    : Array.from({ length: 5 }).map((_, index) => (
                          <li key={index} className="skeleton-loading flex-1 px-4 py-1 border border-solid border-project-purple-100 rounded-full hover:bg-project-purple-100 text-project-gray-100 cursor-pointer">
                              categoria...
                          </li>
                      ))}
            </ul>
        </div>
    );
};
