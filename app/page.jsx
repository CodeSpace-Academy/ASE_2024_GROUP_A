import RecipeGrid from "@/components/RecipeGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <RecipeGrid />
    </>
=======
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <RecipeGrid recipes={recipes} />

        {recipes.length > 0 ? (
          <div className="mt-8">
            <Pagination currentPage={page} totalPages={totalPages} />
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No recipes found.</p>
          </div>
        )}
      </div>
    </div>
>>>>>>> aa5f051e8e1fd454ac8e0365c88fdcccbc2e7cff
  );
}
