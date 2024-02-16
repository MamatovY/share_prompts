import Feed from "@/components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Открывайте для себя и делитесь
                <br />

                <span className="orange_gradient text-center">
                    Подсказки на основе искусственного интеллекта
                </span>
            </h1>
            <p className="desc text-center">
                Promptopia - это инструмент искусственного интеллекта с открытым исходным кодом, позволяющий современному миру находить, создавать творческие подсказки и делиться ими
            </p>

            <Feed />
        </section>
    )
}

export default Home