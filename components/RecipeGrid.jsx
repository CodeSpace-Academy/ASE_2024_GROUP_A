"use client";

import { useState, useEffect } from "react";
import { getRecipes } from "@/lib/api";
import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import Loader from "./Loader";

export default function RecipeGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPageFromURL = Number(searchParams.get("page")) || 1;

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({
    category: "",
    sort: "",
    search: "",
  });

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const [recipesData] = await Promise.all([
        getRecipes({
          page: page,
          limit: 20,
          ...filters,
        }),
      ]);

      setRecipes(recipesData.recipes);
      setTotalPages(recipesData.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPageFromURL);
  }, [currentPageFromURL, filters]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="md:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader /> 
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe._id} recipe={recipe} />
                ))}
              </div>

              {recipes.length > 0 ? (
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPageFromURL}
                    totalPages={totalPages}
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No recipes found.</p>
                </div>
              )}
            </>
          )}
        </div>
=======
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
>>>>>>> aa5f051e8e1fd454ac8e0365c88fdcccbc2e7cff
      </div>
    </div>
  );
}
