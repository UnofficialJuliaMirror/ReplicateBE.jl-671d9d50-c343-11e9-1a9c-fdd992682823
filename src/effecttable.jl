#Tables structure

abstract type RBETable end

struct EffectTable <: RBETable
    name::Vector
    est::Vector
    se::Vector
    f::Vector
    df::Vector
    t::Vector
    p::Vector
    function EffectTable(name, est, se, f, df, t, p)
        new(name, est, se, f, df, t, p)
    end
end

function Base.getindex(t::T, r::Int, c::Int) where T <: RBETable
    return getfield(t, fieldnames(typeof(t))[c])[r]
end
function Base.getindex(t::T, c::Int)  where T <: RBETable
    return getfield(t, fieldnames(typeof(t))[c])
end
function Base.show(io::IO, t::T) where T <: RBETable
    header      = tableheader(t)
    mask        = Array{Bool, 1}(undef, length(header))
    for i = 1:length(header)
        if any(x -> x, t[i] .=== NaN) mask[i] = false else  mask[i] = true end
    end
    matrix      = Array{String, 2}(undef, length(t.name), length(header))
    matrix[:,1] = string.(t.name)
    for c = 2:length(header)
        for r = 1:length(t.name)
            matrix[r,c] = string(round(t[r,c], sigdigits=6))
        end
    end
    header = header[mask, :]
    matrix = matrix[:, mask]
    l = maximum(length.(matrix), dims = 1) .+ 3
    for c = 1:length(header)
        if l[c] < length(header[c]) l[c] = length(header[c]) + 3 end
        header[c] = addspace(header[c], l[c]-length(header[c]))
        for r = 1:length(t.name)
            matrix[r,c] = addspace(matrix[r,c], l[c]-length(matrix[r,c]))
        end
    end
    chl = Vector{Char}(undef, sum(l))
    chl .= '─'
    line = String(chl)
    println(io, line)
    println(io, header ...)
    println(io, line)
    for r = 1:length(t.name)
        println(io, matrix[r,:] ...)
    end
    print(io, line)
end

function tableheader(t::EffectTable)
    return ["Effect", "Value" , "SE",  "F" , "DF", "t", "P"]
end
