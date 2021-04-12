/* A função abaixo, retorna cor de um tipo de pokemon */
export const getColorOfType = (type) => {
    if (type === "bug") {
        return "#bcdc6d"
    }
    if (type === "dark") {
        return "#5e4531"
    }
    if (type === "dragon") {
        return "#8954fc"
    }
    if (type === "electric") {
        return "#fef923"
    }
    if (type === "fairy") {
        return "#fe9fc1"
    }
    if (type === "fighting") {
        return "#e71218"
    }
    if (type === "fire") {
        return "#f57e0a"
    }
    if (type === "flying") {
        return "#5db8b1"
    }
    if (type === "ghost") {
        return "#8d54a3"
    }
    if (type === "grass") {
        return "#3d9608"
    }
    if (type === "ground") {
        return "#e0d057"
    }
    if (type === "ice") {
        return "#1894a0"
    }
    if (type === "normal") {
        return "#cbc8a9"
    }
    if (type === "poison") {
        return "#a718d6"
    }
    if (type === "psychic") {
        return "#eb0d62"
    }
    if (type === "rock") {
        return "#76693d"
    }
    if (type === "shadow") {
        return "#403246"
    }
    if (type === "steel") {
        return "#7a8d89"
    }
    if (type === "unknown") {
        return "#68a090"
    }
    if (type === "water") {
        return "#0979bb"
    }
    return "#ddd"

}