import bpy

# Delete default cube
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Create a 3D text object
bpy.ops.object.text_add(location=(0, 0, 0))
text_obj = bpy.context.object
text_obj.data.body = "Jaguar Corp"

# Adjust font and size
text_obj.data.extrude = 0.1
text_obj.data.bevel_depth = 0.02

# Apply material for neon green effect
material = bpy.data.materials.new(name="NeonGreen")
material.use_nodes = True
nodes = material.node_tree.nodes
bsdf = nodes.get("Principled BSDF")
bsdf.inputs["Base Color"].default_value = (0, 1, 0, 1)  # Green
bsdf.inputs["Emission"].default_value = (0, 1, 0, 1)    # Emission
bsdf.inputs["Emission Strength"].default_value = 5      # Glow effect

# Assign material to text
text_obj.data.materials.append(material)

# Render the scene
bpy.context.scene.render.filepath = "jaguar_logo.png"
bpy.ops.render.render(write_still=True)
