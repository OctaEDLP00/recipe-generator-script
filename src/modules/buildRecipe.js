/**
 * Construye el objeto de receta JSO N (CraftingShaped).
 * @param {import('../jsdoc.d.mjs').CraftingShaped} props
 * @returns {object}
 */
export function buildRecipe(props) {
  // Aseguramos que el group coincida con name si querés:
  // props.group = name;

  return {
    type: props.type,
    group: props.group,
    category: props.category,
    key: props.key,
    pattern: props.pattern,
    result: {
      count: props.result.count,
      id: props.result.id
    }
  };
}
