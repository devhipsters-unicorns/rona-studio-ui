<template>
  <div
    id="split-view"
    class="shadow"
    ref="splitView"
    @mousedown="mouseDownHandler($event)"
    @mousemove="mouseMoveHandler($event)"
    @mouseup="mouseUpHandler($event)"
  >
    <div class="split-left" ref="leftView">
      <span class="drag-handle"></span>
      <slot name="split-view-left"></slot>
    </div>
    <div class="split-right" ref="rightView">
      <slot name="split-view-right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface iState {
  dragStarted: boolean
  rects: { [key: string]: string | number | any } | undefined
  parentRects: { [key: string]: string | number | any } | undefined
  startXpos: number | null | undefined
  clone: HTMLElement | undefined
}
import { reactive, ref, Ref } from 'vue'
import {
  TvoidFunction,
  TvoidFunctionEvent,
  TfunctionHtml,
} from '../../../types'

const splitView: Ref = ref(HTMLElement)
const leftView: Ref = ref(HTMLElement)
const rightView: Ref = ref(HTMLElement)

const state: iState = reactive({
  dragStarted: false,
  parentRects: undefined,
  startXpos: undefined,
  rects: undefined,
  clone: undefined,
})

const styleClone: TfunctionHtml = async (clone: HTMLElement) => {
  requestAnimationFrame(() => {
    clone.style.setProperty('--height', `${state.rects?.height}px`)
    clone.style.setProperty('--width', `${state.rects?.width}px`)
    clone.style.setProperty(
      '--top',
      `${state.rects?.top} - ${state.parentRects?.top}`,
    )
  })
  return clone
}

const cloneHandler: TfunctionHtml = async (target: HTMLElement) => {
  let clone: any = target.cloneNode(true)
  clone.classList.add('clone')
  clone = styleClone(clone)
  return clone
}

const mouseDownHandler: TvoidFunctionEvent = async (event: any) => {
  const target = event.target.classList.contains('drag-handle')
    ? event.target
    : event.target.closest('.drag-handle')
  if (!target) return
  state.parentRects = splitView.value?.getBoundingClientRect()
  state.rects = target.getBoundingClientRect()
  state.dragStarted = true
  state.startXpos = event.clientX
  state.clone = await cloneHandler(target)
  leftView.value.append(state.clone)
}

const mouseMoveHandler: TvoidFunctionEvent = async (event: any) => {
  event.preventDefault()
  if (!state.dragStarted && !state.clone) {
    return
  }

  requestAnimationFrame(() => {
    state.clone?.style?.setProperty(
      'transform',
      `translateX(${
        event.clientX - (state.rects?.x + state.rects?.width / 2)
      }px)`,
    )
  })
}

const mouseUpHandler: TvoidFunctionEvent = async (event: any) => {
  if (!state.dragStarted) {
    return
  }
  state.dragStarted = false
  await setSplitViewPanleWidth(event)
  if (state.clone) await removeClone()
}

const setSplitViewPanleWidth: TvoidFunctionEvent = async (event: any) => {
  const dx = event.clientX - Number(state.startXpos)
  const newLeftWidth =
    ((leftView.value.getBoundingClientRect().width + dx) * 100) /
    state.parentRects?.width
  leftView.value.style.setProperty('--default-width', `${newLeftWidth}%`)
}

const removeClone: TvoidFunction = async () => {
  const clones = leftView.value.querySelectorAll('.clone')
  if (clones.length == 0) return

  for (const clone of clones) {
    leftView.value.removeChild(clone)
  }
  delete state.clone
  delete state.startXpos
  delete state.rects
  delete state.parentRects
}
</script>

<style lang="scss">
#split-view {
  height: 100%;
  background: var(--white);
  border-radius: 0.3125rem;
  display: flex;
  position: relative;
  user-select: none;
  .split-left {
    --default-width: 50%;
    width: var(--default-width);
    position: relative;
    transition: width 0.3s ease-in-out;
  }
  .split-right {
    flex: 1;
  }
  .split-left,
  .split-right {
    padding: 1rem;
  }
  .drag-handle {
    $color: rgba(209, 206, 206, 0.863);
    --width: 0.25rem;
    --height: 0px;
    --top: 0px;
    --right: 0.1205rem;
    --bottom: 0px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: var(--right);
    top: var(--top);
    width: var(--width);
    bottom: var(--bottom);
    background: transparentize($color, 0.6);
    cursor: ew-resize;
    will-change: transform;
    z-index: 99;
    .mdi {
      cursor: ew-resize;
    }
    &.clone {
      position: absolute;
      width: var(--width);
      height: var(--height);
      top: var(--top);
      right: var(--right);
      z-index: 1000;
      background: rgb(146, 178, 252);
      cursor: ew-resize;
    }
    .mdi {
      cursor: ew-resize;
    }
    &:hover {
      border: none;
      background: rgb(199, 213, 253);
      svg {
        fill: var(--accent);
        cursor: ew-resize;
      }
    }
  }
}
</style>
