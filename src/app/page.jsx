import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

export default function Home({searchParams}) {
	const page = parseInt(searchParams.page) || 1;
	return (
		<div>
			<Featured />
			<CategoryList />
			<div className="flex flex-col lg:flex-row mt-10 gap-10">
				<CardList page={page} />
				<Menu />
			</div>
		</div>
	);
}
